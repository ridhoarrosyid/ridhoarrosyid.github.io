import { X, ExternalLink } from "lucide-react";
import { createPortal } from "react-dom"; // Tambahkan import createPortal
import type { Project } from "../types";
import type { Dispatch, SetStateAction } from "react";
import GithubLogo from "../assets/logo/Github";
import { useTranslation } from "react-i18next";

export default function Modal({
  selectedProject,
  setSelectedProject,
}: {
  selectedProject: Project;
  setSelectedProject: Dispatch<SetStateAction<Project | null>>;
}) {
  // Pengecekan apakah link valid (ada isinya dan bukan pagar "#")
  const hasDemo = selectedProject.demoLink && selectedProject.demoLink !== "#";
  const hasRepo = selectedProject.repoLink && selectedProject.repoLink !== "#";
  const { t } = useTranslation();
  // Kita bungkus seluruh return dengan createPortal dan targetkan document.body
  return createPortal(
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => setSelectedProject(null)}
      ></div>

      {/* Modal Panel */}
      <div className="animate-zoom-in relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-4xl border border-white bg-white/90 shadow-2xl backdrop-blur-2xl">
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-6 right-6 z-10 rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-red-50 hover:text-red-500"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <span className="mb-2 block text-sm font-bold tracking-wider text-blue-600 uppercase">
            {t(`portfolio.filters.${selectedProject.category.code}`)}
          </span>
          <h2 className="mb-6 text-3xl font-extrabold text-slate-900">
            {t(`projects.${selectedProject.id}.title`)}
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
                {t("portfolio.modal.challenge")}
              </h3>
              <p className="pl-10 leading-relaxed text-slate-600">
                {t(`projects.${selectedProject.id}.challenge`)}
              </p>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600">
                  02
                </span>
                {t("portfolio.modal.solution")}
              </h3>
              <p className="pl-10 leading-relaxed text-slate-600">
                {t(`projects.${selectedProject.id}.solution`)}
              </p>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm text-emerald-600">
                  03
                </span>
                {t("portfolio.modal.focus")}
              </h3>
              <p className="pl-10 leading-relaxed text-slate-600">
                {t(`projects.${selectedProject.id}.solution`)}
              </p>
            </div>
          </div>

          {/* Area Tombol */}
          <div className="mt-12 border-t border-slate-200 pt-8 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Tombol Live Demo */}
              <a
                href={hasDemo ? selectedProject.demoLink : undefined}
                target={hasDemo ? "_blank" : undefined}
                rel={hasDemo ? "noopener noreferrer" : undefined}
                onClick={(e) => !hasDemo && e.preventDefault()}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors ${
                  hasDemo
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "cursor-not-allowed bg-slate-200 text-slate-400"
                }`}
              >
                {t("portfolio.modal.btnDemo")} <ExternalLink size={18} />
              </a>

              {/* Tombol Repository */}
              <a
                href={hasRepo ? selectedProject.repoLink : undefined}
                target={hasRepo ? "_blank" : undefined}
                rel={hasRepo ? "noopener noreferrer" : undefined}
                onClick={(e) => !hasRepo && e.preventDefault()}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors ${
                  hasRepo
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "cursor-not-allowed bg-slate-200 text-slate-400"
                }`}
              >
                {t("portfolio.modal.btnRepo")}{" "}
                <GithubLogo className="size-4.5" />
              </a>
            </div>

            {/* Pesan Bantuan Dinamis */}
            {(!hasDemo || !hasRepo) && (
              <p className="mt-4 text-xs text-slate-400">
                {t("portfolio.modal.disabledNote")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
