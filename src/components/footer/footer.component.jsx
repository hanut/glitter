import React from 'react';
import { Link } from "react-router-dom";

import './styles.scss';

const FooterComponent = () => (
  <footer className="footer">
    &copy;2020&nbsp;&nbsp;
    <Link to="https://hanutsingh.in">Hanut Singh Gusain</Link>
  </footer>
)

export default FooterComponent;