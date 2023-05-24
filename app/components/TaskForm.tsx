'use client';

import { ChangeEvent, useState, FormEvent, useEffect } from 'react';
import { ITask } from '../interface/Task';

type Props = {
  btnText: string;
};
const TaskForm = ({ btnText }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  const addTaskHandle = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setAmount(parseInt(e.target.value));
    }
    console.log(title);
    console.log(amount);
  };

  return (
    <form onSubmit={addTaskHandle} className="flex flex-col max-w-md mx-auto">
      <div className="flex flex-col items-start">
        <label htmlFor="title" className="font-bold mb-2">
          Item:
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Item"
          className="py-2 px-4 mb-6 border-2 border-gray-300 w-full"
        />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="count" className="font-bold mb-2">
          Quantidade:
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="count"
          placeholder="Quantidade"
          className="py-2 px-4 mb-6 border-2 border-gray-300 w-full"
        />
      </div>
      <input
        type="submit"
        value={btnText}
        className="font-bold bg-blue-700 border-2 border-blue-600 text-white w-full px-5 py-2 ease-in duration-200 cursor-pointer hover:text-blue-700  hover:bg-blue-100 hover:border-blue-200"
      />
    </form>
  );
};
export default TaskForm;
