import React from 'react'
import "./User.css"
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import DriveEtaIcon from '@mui/icons-material/DriveEta';


function User() {
  return (
    <div className='user'>
        <img src="./images/avatar.jpg" alt="" className='user__avatar'/>
        <h1 className="user__name">Isabelle LIBESSART</h1>
        <p className="user__profession">Développeuse Intégratrice d'Applications</p>
        <div className="user__infos">
            <p className="user__info">
              <HomeIcon /> 49 grand' rue 57865 AMANVILLERS</p>
            <p className="user__info">
              <PhoneIcon /><a href="tel:+33632303729">06 32 30 37 29</a>
            </p>
            <p className="user__info">
              {/* attention mailto plutôt deprécié */}
              <EmailIcon /><a href="mailto:isabelle.libessart@laposte.net">isabelle.libessart@laposte.net</a>
            </p>
            <p className="user__info">
              <EventIcon />Née le : 08/03/1977</p>
            <p className="user__info">
              <DriveEtaIcon />Permis B - Véhicule personnel</p>
        </div>
    </div>
  )
}

export default User