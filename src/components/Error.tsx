import { FunctionComponent } from 'react';

export const Error: FunctionComponent<{error: any; tryAgain: () => void}> = ({error, tryAgain}) => {
  return (
    <div className="absolute bottom-0 left-1/2 right-0" >
      <div className="relative text-center left-[-50%] p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
        <span className="font-medium">{error}</span> Change a few things up and try submitting again.
        <button
          type="button" 
          onClick={tryAgain} 
          className="mx-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
