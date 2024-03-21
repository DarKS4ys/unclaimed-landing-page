'use client';
import React, { useState } from 'react';
import { aboutYouSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function AboutYouForm() {
  const form = useForm<z.infer<typeof aboutYouSchema>>({
    resolver: zodResolver(aboutYouSchema),
    defaultValues: {},
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const onSubmit = async (values: z.infer<typeof aboutYouSchema>) => {
    try {
      setLoading(true);

      //api call here

      setSuccess('Successfully created new video lesson!');
      setError(undefined);

      setTimeout(() => {
        setSuccess(undefined);
      }, 3000);
    } catch {
      setError('Failed to create video lesson, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="recentAdress"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  disabled={loading}
                  placeholder={'Your most recent adress'}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="gap-x-4 flex w-full">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input disabled={loading} placeholder={'City'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input disabled={loading} placeholder={'State'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="zipcode"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormControl>
                <Input disabled={loading} placeholder={'Zipcode'} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="mt-4 flex justify-center tracking-widest p-4 text-2xl font-semibold bg-hdark text-white rounded-full hover:bg-hdark/80 transition active:scale-95"
        >
          CONTINUE
        </button>
      </form>
    </Form>
  );
}
