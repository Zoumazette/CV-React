import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import PoolIcon from '@mui/icons-material/Pool';
import NavigationIcon from '@mui/icons-material/Navigation';
import LandscapeIcon from '@mui/icons-material/Landscape';
import MovieIcon from '@mui/icons-material/Movie';


function interests() {
  return (
    <>
        <div className="skills">
            <h2 className="h2">Centres d'intérêts</h2>
            <ul>
                <li>Informatique</li>
                <li>Natation</li>
                <li>Course d'orientation</li>
                <li>Via ferrata</li>
                <li>Cinéma</li>
            </ul>
        </div>
        <div className="interests">
            <CodeIcon style={{ fontSize: 30}} />
            <PoolIcon style={{ fontSize: 30}} />
            <NavigationIcon style={{ fontSize: 30}} />
            <LandscapeIcon style={{ fontSize: 30}} />
            <MovieIcon style={{ fontSize: 30}} />
        </div>
    </>
  )
}

export default interests