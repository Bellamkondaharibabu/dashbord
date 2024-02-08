import React from 'react'
import { FaGithub } from "react-icons/fa";
import { DiBitbucket } from "react-icons/di";
import { TbBrandDribbble } from "react-icons/tb";
import { FaDropbox } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { BsSlack } from "react-icons/bs";
const Github = () => {
    return (
        <div className='submenu'>
           <div className="options-git">
                <div className="option-git">
                    <div className='git-ul'>
                        <span className='git'><FaGithub  style={{color:"yellow",fontSize:"26"}}/>GitHub</span>
                        <span className=' git'><DiBitbucket  style={{color:"yellow",fontSize:"26"}}/>Bitbucket</span>
                        <span className='git'><TbBrandDribbble   style={{color:"yellow",fontSize:"26"}}/>Dribbble</span>
                        <span className='git'><FaDropbox   style={{color:"yellow",fontSize:"26"}}/> Dropbox</span>
                        <span className='git'><IoIosMail   style={{color:"yellow",fontSize:"26"}}/>MailChimp</span>
                        <span className='git'><BsSlack   style={{color:"yellow",fontSize:"26"}}/>Slack</span>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github