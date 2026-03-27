import { X, ExternalLink } from "lucide-react";
import type { Project } from "../types";
import type { Dispatch, SetStateAction } from "react";

export default function Modal({
  selectedProject,
  setSelectedProject,
}: {
  selectedProject: Project;
  setSelectedProject: Dispatch<SetStateAction<Project | null>>;
}) {
  return (
    <div className="fixed inset-0 right-0 left-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => setSelectedProject(null)}
      ></div>

      {/* Modal Panel */}
      <div className="animate-zoom-in relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white bg-white/90 shadow-2xl backdrop-blur-2xl">
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-6 right-6 z-10 rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-red-50 hover:text-red-500"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <span className="mb-2 block text-sm font-bold tracking-wider text-blue-600 uppercase">
            {selectedProject.category.display}
          </span>
          <h2 className="mb-6 text-3xl font-extrabold text-slate-900">
            {selectedProject.title}
          </h2>

          <div className="mb-10 flex flex-wrap gap-2 border-b border-slate-200 pb-8">
            {selectedProject.tech.map((e) => (
              <span
                key={e}
                className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700"
              >
                {e}
              </span>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm text-red-600">
                  01
                </span>
                Tantangan Bisnis / Latar Belakang
              </h3>
              <p className="pl-10 leading-relaxed text-slate-600">
                {selectedProject.content.challenge}
              </p>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600">
                  02
                </span>
                Solusi Teknis & Visual
              </h3>
              <p className="pl-10 leading-relaxed text-slate-600">
                {selectedProject.content.solution}
              </p>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm text-emerald-600">
                  03
                </span>
                Fokus UI/UX
              </h3>
              <p className="pl-10 leading-relaxed text-slate-600">
                {selectedProject.content.focus}
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8 text-center">
            <button
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white opacity-50 transition-colors hover:bg-slate-800"
              title="Tautan demo belum tersedia untuk proyek konsep"
            >
              Lihat Live Demo <ExternalLink size={18} />
            </button>
            <p className="mt-3 text-xs text-slate-400">
              *Ini adalah proyek studi kasus/konsep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
