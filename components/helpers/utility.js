const emailValidationPattern = /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
import { notify } from './../UI/Notification';
import MessageSuccess from './../UI/MessageSuccess';
import axios from 'axios';
import { showModal } from './../UI/Modal';

export const scrollTopClick = () => setTimeout(() => window.scrollTo(0, 0), 0);

export const checkValidity = (value, rules) => {
    if (!rules) return true;
    let isValid = true;
    let message = '';
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
        if (!isValid) {
            message = 'Ovo polje je obavezno';
            return { isValid, message }
        }
    }
    if (rules.email) {
        isValid = value.match(emailValidationPattern) && isValid;
        message = !isValid && 'Unesite ispravan email';
    }
    return { isValid, message };
}

export function selectText(node) {
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
        return true;
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
        return true;
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
        return false;
    }
}

export const sendMail = async (data, setLoading) => {
  try {
    setLoading(true);
    await axios.post('/api/email', data);
    setLoading(false);
    showModal(<MessageSuccess />);
  } catch (error) {
    console.log(error);
    setLoading(false);
    notify('Network error!', 'Danger');
  }
}

export const formatDate = (date) => {
    const formattedDate = new Date(date);
    const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'];

    const currentYear = new Date().getFullYear();

    const day = formattedDate.getDate();
    const month = formattedDate.getMonth();
    const year = formattedDate.getFullYear();
    return `${mL[month]} ${day}${year === currentYear ? '' : `, ${year}`}`;
}