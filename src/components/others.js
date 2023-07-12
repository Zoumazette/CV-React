import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function others() {
  return (
    <>
        <div className="other">
            <h2 className="h2">Autres</h2>
            <p className="other__info">
              <a href="https://www.linkedin.com/in/isabelle-libessart/" target="blank" id="linkedin" title="https://www.linkedin.com/in/isabelle-libessart/">
                <LinkedInIcon style={{ fontSize: 20}} /> Linkedin
              </a>
            </p>
            <p className="other__info">
              <a href="https://github.com/Zoumazette" target="blank" id="github" title="https://github.com/Zoumazette">
              <GitHubIcon style={{ fontSize: 20}} /> Github
              </a>
            </p>
        </div>
    </>
  )
}

export default others