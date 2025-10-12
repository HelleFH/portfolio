// SocialLinks.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialLinks.scss';
import { Github, Linkedin, Menu} from "lucide-react";

const SocialLinks = ({ onClick }) => {
  return (
          <li className="flex items-center justify-center gap-3">
                        
                          
                            <a
                              href="https://linkedin.com" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social-link w-5 m-0"
                            >
                              <Linkedin size={20} />
                            </a>
                                   <a
                              href="https://github.com/HelleFH"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social-link  w-5 m-0"
                            >
                              <Github size={20} />
                            </a>
                
                
                          </li>
  );
};

export default SocialLinks;
