import React from 'react'
import './styles/footer.css'

const Footer = () => {
	return (
		<footer className="footer">
			<h4>buenos aires news</h4>
			<p>Copyright Buenos Aires News</p>
			<p>{new Date().getFullYear()}</p>
		</footer>
	)
}

export default Footer
