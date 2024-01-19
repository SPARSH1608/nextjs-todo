'use server';
import { redirect } from 'next/navigation';
import prisma from './db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const createTask = async (formData) => {
  const content = formData.get('content');
  console.log(content);
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath('/tasks');
};
export const deleteTask = async (prevState, formData) => {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  const id = formData.get('id');
  try {
    await prisma.task.delete({
      where: {
        id: id,
      },
    });
    revalidatePath('/tasks');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'error' };
  }
};

export const getSingleTask = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id: id,
    },
  });
};

export const editTask = async (formData) => {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));

  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed');

  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      content,
      completed: completed === 'on' ? true : false,
    },
  });
  redirect('/tasks');
};
//redirect -not in try and block
// unless the component has use client so whenever we are setting this up in server action
//server action need to be in sever component or if it is in separate file then it has to be use client

//for pending state
export const createTaskCustom = async (prevState, formData) => {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  const content = formData.get('content');
  const Task = z.object({
    content: z.string().min(5),
  });
  console.log(content);
  try {
    Task.parse({ content: content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath('/tasks');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    // return { message: error.errors[0].message };
    return { message: 'error' };
  }
};
