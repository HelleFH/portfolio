import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import CloseButton from "../Buttons/CloseButton.tsx";
import { Project } from "../../types/project.ts"


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
      <div className="mx-4 w-full max-w-md overflow-hidden rounded-lg bg-[rgba(var(--white-color))] shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b bg-green-50 px-4 py-3">
          <h5 className="text-xl font-semibold">Login Details</h5>
          <CloseButton onClick={onHide} />
        </div>

        {/* Body */}
        <div className="space-y-4 p-4">
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
        <div className="border-t bg-gray-100 p-4"></div>

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
  <p className="flex items-center justify-between rounded bg-gray-100 p-3 transition-colors hover:bg-gray-200">
    <strong className="flex-1">{label}:</strong>
    <span>{value}</span>
    <FontAwesomeIcon
      icon={faCopy}
      onClick={onCopy}
      className="ml-2 cursor-pointer text-gray-600 hover:text-[rgba(var(--black-color))] "
    />
    {copied && (
      <span className="animate-fadeOut ml-2 text-sm text-green-600">
        Copied!
      </span>
    )}
  </p>
);

export default LoginModal;
