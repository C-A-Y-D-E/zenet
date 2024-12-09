import React from 'react';

export default function TerminalHeader() {
  return (
    <pre className="text-center mb-8 text-xs sm:text-base text-white">
{`
███████╗███████╗███╗   ██╗███████╗████████╗
╚══███╔╝██╔════╝████╗  ██║██╔════╝╚══██╔══╝
  ███╔╝ █████╗  ██╔██╗ ██║█████╗     ██║   
 ███╔╝  ██╔══╝  ██║╚██╗██║██╔══╝     ██║   
███████╗███████╗██║ ╚████║███████╗   ██║   
╚══════╝╚══════╝╚═╝  ╚═══╝╚══════╝   ╚═╝   
`}
    </pre>
  );
}