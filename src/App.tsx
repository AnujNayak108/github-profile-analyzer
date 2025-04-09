import UsernameForm from "./components/ui/UsernameForm";
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-black to-blue-900 p-4 flex items-center">
      <div className="max-w-screen mx-auto bg-gray-900 shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">GitHub User Profile Analyzer</h1>
        <UsernameForm />
      </div>
    </div>
  );
}
