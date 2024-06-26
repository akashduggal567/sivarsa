'use client';
import styled from 'styled-components';
import "./globals.css";
import Navbar from "./navbar";


export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
          <GridContainer>
            {children}
            <Navbar />
          </GridContainer>
      </body>
    </html>
  );
}

const GridContainer = styled.div`
    display: grid;
    flex-wrap: wrap;
    margin: 0 auto; /* Center the grid horizontally */
    width: 100%; /* Adjust width as needed */
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr 1fr 1fr;
    height: 100vh;
    gap: 4px;
    @media (max-width: 768px) {
      flex-direction: column; /* Stack items on mobile */
    }
`;