import { useNavigate } from "react-router";
import logo from "../../imports/Asset_1.png";

export default function Header() {
  const navigate = useNavigate();

  const handleScheduleDiscussion = () => {
    window.open('https://wa.me/918892679226', '_blank');
  };

  return (
    <header className="border-b border-slate-800/50 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img src={logo} alt="MonoMorph Minds" className="h-10 w-auto object-contain" />
          <span className="text-xl font-semibold">MonoMorph Minds</span>
        </button>
        <button
          onClick={handleScheduleDiscussion}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          Schedule Discussion
        </button>
      </div>
    </header>
  );
}
