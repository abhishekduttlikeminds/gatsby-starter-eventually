import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li>
              <a href={url} class={`icon ${icon}`}>
                <span class="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li> <a href="https://breinto.com/privacy">Privacy Policy</a></li>
      </ul>
      <ul className="copyright">
        <li>&copy; Breinto.</li>
        <li>
          Credits: <a href="https://breinto.com/">Team Breinto</a>
        </li>
      </ul>
    </footer>
  );
}
