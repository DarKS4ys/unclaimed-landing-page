import React from 'react';

export default function Footer() {
  return (
    <div className="bg-hdark mx-auto max-w-8xl w-full text-background p-12 rounded-2xl flex justify-between">
      <div>
        <h1 className="text-3xl font-semibold">Unclaimed Properties</h1>
        <p>Claim your money.</p>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-description">Links</h1>
        <p>Benefits</p>
        <p>Pricing</p>
        <p>FAQs</p>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-description">IDK</h1>
        <p>Words here a lot of words here just a few</p>
        <p>Words here a lot of words here just a few</p>
        <p>Words here a lot of words here just a few</p>
      </div>
    </div>
  );
}
