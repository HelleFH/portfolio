import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import CloseButton from "../Buttons/CloseButton.tsx";

interface Project {
  id?: number;
  type?: string;
  name?: string;
  descriptionHeader?: string;
  images?: string[];
  technologies?: string;
  projectLink?: string;
  githubLink?: string;
  buttonText?: string;
  githubButtonText?: string;
  username?: string;
  password?: string;
  adminUsername?: string;
  adminPassword?: string;
}

interface LoginModalProps {
  show: boolean;
  onHide: () => void;
  project: Project;
  backdropClassName?: string;
  dialogClassName?: string;
  handleCopyToClipboard?: (text: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  show,
  onHide,
  project,
}) => {
const [copiedField, setCopiedField] = React.useState<string | null>(null);

  const handleCopy = (text: string | undefined, field: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal box */}
      <div className="bg-[rgba(var(--white-color))] rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center bg-green-50 px-4 py-3 border-b">
          <h5 className="text-xl font-semibold">Login Details</h5>
          <CloseButton onClick={onHide} />
        </div>

        {/* Body */}
        <div className="p-4 space-y-4">
          {/* User Credentials */}
          {project?.username && (
            <div className="space-y-2">
              <CredentialRow
                label="User"
                value={project.username}
                onCopy={() => handleCopy(project.username, "username")}
                copied={copiedField === "username"}
              />
              <CredentialRow
                label="Password"
                value={project.password}
                onCopy={() => handleCopy(project.password, "password")}
                copied={copiedField === "password"}
              />
            </div>
          )}

          {/* Admin Credentials */}
          {project?.adminUsername && (
            <div className="space-y-2">
              <CredentialRow
                label="Admin"
                value={project.adminUsername}
                onCopy={() => handleCopy(project.adminUsername, "adminUsername")}
                copied={copiedField === "adminUsername"}
              />
              <CredentialRow
                label="Password"
                value={project.adminPassword}
                onCopy={() => handleCopy(project.adminPassword, "adminPassword")}
                copied={copiedField === "adminPassword"}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-4 border-t"></div>

        {/* Tailwind animation */}
        <style>
          {`
            @keyframes fadeOut {
              0% { opacity: 1; }
              80% { opacity: 1; }
              100% { opacity: 0; }
            }
            .animate-fadeOut {
              animation: fadeOut 2s forwards;
            }
          `}
        </style>
      </div>
    </div>
  );
};

interface CredentialRowProps {
  label: string;
  value?: string;
  onCopy: () => void;
  copied: boolean;
}

const CredentialRow: React.FC<CredentialRowProps> = ({
  label,
  value,
  onCopy,
  copied,
}) => (
  <p className="flex justify-between items-center bg-gray-100 p-3 rounded hover:bg-gray-200 transition-colors">
    <strong className="flex-1">{label}:</strong>
    <span>{value}</span>
    <FontAwesomeIcon
      icon={faCopy}
      onClick={onCopy}
      className="ml-2 cursor-pointer text-gray-600 hover:text-[rgba(var(--black-color))] "
    />
    {copied && (
      <span className="ml-2 text-green-600 text-sm animate-fadeOut">
        Copied!
      </span>
    )}
  </p>
);

export default LoginModal;
