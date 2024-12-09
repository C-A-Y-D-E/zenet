export function executeCommand(command: string): string {
  switch (command) {
    case 'help':
      return `Available commands:
- buy: Get the link to purchase ZENET tokens
- chart: View current price charts
- socials: Display social media links
- ca: Show contract address
- contract: Show contract address
- clear: Clear the terminal
- sonnet: magic words
- help: Show this help message

`;

    case 'buy':
      return `🚀 Purchase ZENET tokens at:
https://jup.ag/swap/SOL-3JY6jH32DXPrVv247abQDYeYGQy9BQv6QCXDSNigpump`;

    case 'chart':
      return `📈 ZENET Price Charts:

Dexscreener:
https://dexscreener.com/solana/jb1lbbfcot8ur4na8rksdmmtqgfnrierxqauxyn34rz6

Dextools:
https://www.dextools.io/app/en/solana/pair-explorer/JB1LbbFcot8ur4NA8rkSDMMtqGfNRiERxqaUXYn34Rz6?t=1733743188188`;

    case 'socials':
      return `🌐 Official ZENET Social Media:
- Telegram: https://t.me/zenet0x
- Twitter: https://x.com/zenet0x`;

    case 'ca':
    case 'contract':
      return `📝 ZENET Contract Address:
3JY6jH32DXPrVv247abQDYeYGQy9BQv6QCXDSNigpump`;

    case 'clear':
      return '';
    case 'sonnet':
      return 'sonnet is my doggy';
    default:
      return `Command not found: ${command}
Type 'help' to see available commands.`;
  }
}
