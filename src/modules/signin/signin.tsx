import { useToast } from '../../core/hooks/useToast/useToast';

export function SignIn() {
  const { toast } = useToast();

  function onHandleSignIn() {
    toast.success('Welcome to your workspace!', 'Enjoy your adventure.');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <form className="flex flex-col gap-4 bg-gray-900 min-w-96 shadow-md rounded p-8">
        <div className="flex flex-col gap-2">
          <label aria-label="email" className="w-full text-gray-400 text-sm" htmlFor="">E-mail</label>
          <input className="w-full px-4 py-3 text-gray-500 bg-gray-950 rounded-md placeholder:text-gray-500 focus-within:border-2 focus-within:border-violet-500 outline-none"
            type="text" placeholder="E-mail" />
        </div>
        <div className="flex flex-col gap-2">
          <label aria-label="password" className="w-full text-gray-400 text-sm" htmlFor="">Password</label>
          <input className="w-full px-4 py-3 text-gray-500 bg-gray-950 rounded-md placeholder:text-gray-500 focus-within:border-2 focus-within:border-violet-500 outline-none"
            type="password" placeholder="********" />
        </div>

        <button
          className="w-full py-3 bg-violet-600 rounded-md text-gray-50 font-semibold hover:bg-violet-700 transition-all"
          type="button"
          onClick={onHandleSignIn}>SIGNIN</button>
      </form>
    </div>
  );
}
