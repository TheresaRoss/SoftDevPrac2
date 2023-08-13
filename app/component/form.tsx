"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z.object({
  companyName: z.string().min(1, { message: "Company Name is required" }),
  numberSeat: z
    .number()
    .gt(0, { message: "Too low" })
    .lt(11, { message: "Too Much" }),
  contactName: z.string().min(1, { message: "Contact Name is required" }),
  contactNum: z
    .string()
    .min(1, { message: "Contact Number is required" })
    .refine((value) => /^[0-9]{10}$/.test(value), {
      message: "Invalid phone number format",
    }),

  terms: z.boolean().optional(),
});

type ValidationSchema = z.infer<typeof validationSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

  return (
    <form className='px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4 md:flex md:justify-between'>
        <div className='mb-4 md:mr-2 md:mb-0'>
          <label className='label-style' htmlFor='companyName'>
            Company Name
          </label>
          <input
            className={`input-style ${
              errors.companyName && "border-red-500"
            } rounded appearance-none focus:outline-none focus:shadow-outline`}
            id='companyName'
            type='text'
            placeholder='Company Name'
            {...register("companyName")}
          />
          {errors.companyName && (
            <p className='text-xs italic text-red-500 mt-2'>
              {errors.companyName?.message}
            </p>
          )}
        </div>
        <div className='md:ml-2'>
          <label className='label-style' htmlFor='numberSeat'>
            Number Of Seats
          </label>
          <input
            className={`input-style ${
              errors.numberSeat && "border-red-500"
            } rounded appearance-none focus:outline-none focus:shadow-outline`}
            id='numberSeat'
            type='number'
            placeholder='Number Of Seats'
            {...register("numberSeat", { valueAsNumber: true })}
          />
          {errors.numberSeat && (
            <p className='text-xs italic text-red-500 mt-2'>
              {errors.numberSeat?.message}
            </p>
          )}
        </div>
      </div>
      <div className='mb-4'>
        <label className='label-style' htmlFor='contactName'>
          Contect Name
        </label>
        <input
          className={`input-style ${
            errors.contactName && "border-red-500"
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id='contactName'
          placeholder='Contect Name'
          {...register("contactName")}
        />
        {errors.contactName && (
          <p className='text-xs italic text-red-500 mt-2'>
            {errors.contactName?.message}
          </p>
        )}
      </div>
      <div className='mb-4 md:flex md:justify-between'>
        <div className='mb-4 md:mr-2 md:mb-0'>
          <label className='label-style' htmlFor='contactNum'>
            Contect Number
          </label>
          <input
            className={`input-style ${
              errors.contactNum && "border-red-500"
            } rounded appearance-none focus:outline-none focus:shadow-outline`}
            id='contactNum'
            {...register("contactNum")}
          />
          {errors.contactNum && (
            <p className='text-xs italic text-red-500 mt-2'>
              {errors.contactNum?.message}
            </p>
          )}
        </div>
        <div className='md:ml-2 w-full'>
          <label className='label-style' htmlFor='c_contactNum'>
            Boot Size
          </label>
          <select className='w-full py-5' required>
            <option value='10*10'>10 x 10 ft.</option>
            <option value='10*10'>15 x 15 ft.</option>
          </select>
        </div>
      </div>
      <div className='mb-4'>
        <input type='checkbox' id='terms' {...register("terms")} />
        <label
          htmlFor='terms'
          className={`ml-2 mb-2 text-sm font-bold ${
            errors.terms ? "text-red-500" : "text-white"
          }`}
        >
          Would you like a table in your boot
        </label>
        {errors.terms && (
          <p className='text-xs italic text-red-500 mt-2'>
            {errors.terms?.message}
          </p>
        )}
      </div>
      <div className='mb-6 text-center'>
        <button
          className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Register Account
        </button>
      </div>
      <hr className=' border-t' />
      {/* <div className='text-center'>
        <a
          className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
          href='#test'
        >
          Forgot Password?
        </a>
      </div>
      <div className='text-center'>
        <a
          className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
          href='./index.html'
        >
          Already have an account? Login!
        </a>
      </div> */}
    </form>
  );
};

export default Form;
