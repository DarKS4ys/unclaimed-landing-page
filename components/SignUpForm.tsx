'use client';
import React, { useState } from 'react';
import { signUpSchema } from '@/schemas';
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

export default function SignUpForm() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {},
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    try {
      setLoading(true);

      //api call
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
        <div className="gap-x-4 flex w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                {/* <FormLabel className="text-lg">Order</FormLabel> */}
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder={'Legal First Name'}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                {/* <FormLabel className="text-lg">Order</FormLabel> */}
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder={'Legal Last Name'}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className="text-lg">Order</FormLabel> */}
              <FormControl>
                <Input
                  disabled={loading}
                  type="email"
                  placeholder={'Email adress'}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="flex justify-center tracking-widest p-4 text-2xl font-semibold bg-hdark text-white rounded-full hover:bg-hdark/80 transition active:scale-95"
        >
          GET STARTED
        </button>
      </form>

      <p className="text-center opacity-50 text-xs">
        By clicking &quot;Get Started&quot;, you agree to our Privacy Policy and
        Terms and Conditions
      </p>
    </Form>
  );
}
