import { Container, CircularProgress, Snackbar, useMediaQuery, useTheme, Alert } from "@mui/material";
import React, { useContext, useState, FormEventHandler } from "react";
import Heading from "@/components/UI/Heading";
import MyInput from "@/components/UI/MyInput";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import LoadingBar from "@/components/UI/LoadingBar";
import Button3D from "@/components/UI/Button3D";
import ThemeContext, { ThemeContextType } from "context/themeContext";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import useForm from "hooks/useForm";
import { createBody } from "utils/utility";
import Notification from "@/components/UI/Notification";
import BlurIn from "@/components/UI/BlurIn";
import MessageSuccess from "@/components/UI/MessageSuccess";
import { contactFormInputs } from "utils/constants";

const SendMessage = () => {
  const { inputs, setInputs, formIsValid, resetForm } = useForm(contactFormInputs);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const { dark } = useContext(ThemeContext) as ThemeContextType;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const closeSnack = () => setSnackOpen(false);
  const closeDialog = () => setDialogOpen(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (formIsValid) {
      const emailBody = createBody(inputs);
      setLoading(true);
      try {
        await axios.post("/api/email", emailBody);
        setLoading(false);
        setDialogOpen(true);
        resetForm();
      } catch (error) {
        setLoading(false);
        setSnackOpen(true);
      }
    }
  };

  return (
    <Container
      maxWidth="lg"
      className="flex flex-col items-center justify-center text-center min-h-[700px] pb-10"
    >
      {loading && <LoadingBar />}
      <BlurIn>
        <Heading text="Send a message" />
      </BlurIn>

      <div className="w-[600px] max-w-[90%]">
        <BlurIn>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {Object.entries(inputs).map(([key, formCtrl], i) => (
              <BlurIn key={key} delay={i * 150} my={2}>
                <MyInput
                  elementType={formCtrl.elementType}
                  value={formCtrl.value}
                  placeholder={formCtrl.label}
                  required={formCtrl.required}
                  inputHandler={(e) => setInputs(e.target.value, key)}
                />
              </BlurIn>
            ))}

            <BlurIn>
              <Button3D
                type="submit"
                color={dark ? "primary" : "secondary"}
                endIcon={!loading && <SendOutlinedIcon />}
                fullWidth
                disabled={!formIsValid}
              >
                {!loading ? "Send" : <CircularProgress size={24} />}
              </Button3D>
            </BlurIn>
          </form>
        </BlurIn>
      </div>

      <Dialog open={dialogOpen} onClose={closeDialog} fullScreen={isSmallScreen}>
        <MessageSuccess handleClose={closeDialog} />
      </Dialog>

      <Snackbar open={snackOpen} autoHideDuration={6000} onClose={closeSnack} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert onClose={closeSnack} className="snackbar" severity="error">Network error</Alert>
      </Snackbar>
    </Container>
  );
};

export default SendMessage;
