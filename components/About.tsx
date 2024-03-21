import AboutYouForm from './AboutYouForm';

export default function About() {
  return (
    <div className="mx-auto w-full max-w-7xl flex flex-col gap-y-12">
      <div className="h-60 justify-center items-center text-center p-16 rounded-t-xl w-full bg-hlight/10 clip-path">
        <h1 className="text-5xl text-sky-900 font-bold">
          About you
        </h1>
        <h2 className="text-xl opacity-50 w-1/2 mx-auto text-sky-950 font-medium">
          In order to help us locate your unclaimed properties, we need to know the following info
        </h2>
      </div>
      <div className="max-w-xl mx-auto">
        <AboutYouForm />
      </div>
    </div>
  );
}
