import { X, ExternalLink} from 'lucide-react';

export default function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div 
        className="glass w-full max-w-3xl rounded-2xl p-6 md:p-8 relative z-10 animate-[fadeIn_0.3s_ease-out]"
        data-aos="zoom-in"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-slate-600"
        >
          <X size={20} />
        </button>

        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover rounded-xl mb-6 shadow-sm"
        />
        
        <h2 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, idx) => (
            <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-semibold rounded-full">
              {t}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8 text-sm text-slate-600">
          <div>
            <h3 className="font-bold text-slate-800 mb-2">The Challenge</h3>
            <p leading-relaxed>{project.challenge}</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-2">The Solution</h3>
            <p leading-relaxed>{project.solution}</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <a href={project.demoLink} className="flex items-center px-5 py-2.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium">
            <ExternalLink size={16} className="mr-2" /> Live Demo
          </a>
          <a href={project.repoLink} className="flex items-center px-5 py-2.5 glass text-slate-700 hover:bg-white transition-colors font-medium">
            {/*<Github size={16} className="mr-2" />*/} View Code
          </a>
        </div>
      </div>
    </div>
  );
}