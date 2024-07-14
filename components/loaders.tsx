import React from "react";

const Loaders = () => {
  return (
    <div className="text-center h-full flex flex-col justify-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary mx-auto"></div>
      <h2 className="text-primary dark:text-primary mt-4 font-bold text-lg">Generating...</h2>
      <p className="text-zinc-600 dark:text-zinc-400">
        Please wait while we generate the content for you.
      </p>
    </div>
  );
};

export default Loaders;
