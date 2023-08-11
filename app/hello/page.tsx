import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import {
  Checkbox,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
export default function Home() {
  return (
    <main className=' h-screen w-screen center  '>
      <div
        style={{
          position: "absolute",
          filter: "brightness(53%) ",
          backgroundImage: `url('/park.jpg')`,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      ></div>
      <div
        className='center p-10 flex-col
       rounded-3xl max-w-[60%] bg-gradient-to-r via-[rgba(0,0,0,0.5)] from-[rgba(94,255,34,0.2)] to-[rgba(94,255,34,0.2)] '
      >
        <h1 className='center text-3xl text-white mb-10'>Register Form</h1>

        <div className='grid grid-cols-4 gap-4'>
          <TextField
            id='filled-basic'
            className='bg-white col-span-4'
            label='Company Name'
            variant='filled'
          />
          <FormControl className='col-span-2 bg-white'>
            <InputLabel id='test'>Name</InputLabel>
            <Select
              labelId='test'
              label={"Name"}
              className='bg-white '
              variant='filled'
            >
              <MenuItem>10x10 ft</MenuItem>
              <MenuItem>10x15 ft</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={<Checkbox />}
            className='bg-white m-0 col-span-2'
            label='Request Assistance Table'
          />
          <TextField
            id='filled-basic'
            className='bg-white col-span-2'
            label='Contact Name'
            variant='filled'
          />
          <TextField
            id='filled-basic'
            className='bg-white'
            label='Number Of Seats'
            variant='filled'
            type='number'
          />

          <TextField
            id='filled-basic'
            className='bg-white'
            label='Contact Number'
            variant='filled'
            type='tel'
          />
        </div>

        <button className='bg-white px-4 py-2 border-2 border-blue-400 text-black hover:scale-110 mt-10 '>
          Done
        </button>
      </div>
    </main>
  );
}
