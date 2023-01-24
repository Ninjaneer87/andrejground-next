import { SelectOption } from '@/types/select-option.type';
import React from 'react';
import MultiSelect from './MultiSelect';
import Select from './Select';
import GitHubIcon from "@mui/icons-material/GitHub";
import BoltIcon from '@mui/icons-material/Bolt';
import UiItemLinks from '../UiItemLinks';
import StyledDivider from '@/components/UI/StyledDivider';

const options: SelectOption[] = [
  { label: 'First option with a veeery long label', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
  { label: 'Sixth', value: 6 },
  { label: 'Seventh', value: 7 },
];
const optionsMulti: SelectOption[] = [
  { label: 'First option with a veeery long label', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
  { label: 'Sixth', value: 6 },
  { label: 'Seventh', value: 7 },
];

const links = [
  {
    label: "View source on GitHub",
    link: "https://github.com/Ninjaneer87/andrejground-select",
    icon: <GitHubIcon fontSize="large" />,
  },
  {
    label: "Edit on StackBlitz",
    link: "https://stackblitz.com/edit/andrejground-select?file=App.tsx",
    icon: <BoltIcon fontSize="large" />,
  },
];

const UiSelect = () => {
  const [selected, setSelected] = React.useState<SelectOption | undefined>();
  const [selectedMulti, setSelectedMulti] = React.useState<SelectOption[]>([]);

  return (
    <>
      <div className="my-5 text">
        User friendly, animated and highly accessible <strong>Select</strong> and <strong>MultiSelect</strong> components
      </div>
      <div className='flex flex-wrap justify-center gap-10 pt-[50px] pb-[100px] min-h-[400px]'>
        <div className="mb-5 w-fit max-w-full">
          <h2 className='subtitle'>Select</h2>
          <Select
            options={options}
            selected={selected}
            onChange={setSelected}
          />
        </div>

        <div className="mb-5 w-fit max-w-full">
          <h2 className='subtitle'>Multi select</h2>
          <MultiSelect
            options={optionsMulti}
            selected={selectedMulti}
            onChange={setSelectedMulti}
          />
        </div>
      </div>
      <UiItemLinks links={links} />
      <StyledDivider />
    </>
  );
};

export default React.memo(UiSelect);