# Infinite Tic-Tac-Toe ♾️

A strategic twist on the classic Tic-Tac-Toe game! **When you make your 4th move, your first move disappears!** This unique mechanic creates dynamic gameplay that continues infinitely until someone wins.

## 🎮 Game Concept

Infinite Tic-Tac-Toe reimagines the traditional game with a revolutionary constraint: each player can only have a maximum of **3 moves on the board at any time**. When you place your 4th move, your oldest move is automatically removed, creating a constantly evolving strategic landscape.

This simple rule change transforms Tic-Tac-Toe from a simple game that often ends in a draw into a dynamic, strategic battle that can theoretically continue forever until someone outmaneuvers their opponent.

## 📜 Game Rules

1. **3-Move Limit**: Each player can have a maximum of 3 moves on the board simultaneously
2. **Automatic Removal**: When you make your 4th move, your first (oldest) move disappears from the board
3. **Win Condition**: Align 3 of your symbols in a row (horizontal, vertical, or diagonal) to win
4. **Infinite Gameplay**: The game continues indefinitely until someone achieves victory
5. **Move Tracking**: Each move is numbered (1, 2, 3) so you can see which move will disappear next

## 🎯 Game Modes

### 👥 2 Players Mode
Play against a friend on the same device! Take turns placing X and O markers, carefully planning your moves to both create winning opportunities and prevent your oldest moves from being removed at critical moments.

**Perfect for:**
- Face-to-face gameplay
- Teaching strategy and planning ahead
- Competitive matches with friends

### 🤖 vs Computer Mode
Challenge yourself against an AI opponent powered by a strategic algorithm. The computer evaluates the board state and makes intelligent moves to both pursue victory and block your winning attempts.

**Features:**
- Strategic AI that evaluates multiple moves ahead
- Natural gameplay with a slight delay for computer moves
- You play as X, computer plays as O
- Great for solo practice and skill improvement

## 🛠️ Technical Stack

This project is built with modern web technologies:

- **Next.js 15** - React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **TypeScript** - Type-safe development
- **React Hooks** - State management and game logic

## 🚀 Getting Started

### Installation

First, clone the repository and install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to start playing!

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Features

- **Beautiful UI**: Modern, gradient-based design with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Visual Feedback**: 
  - Move numbers displayed on each cell
  - Fading effect for older moves
  - Highlighting of winning combinations
  - Different colors for each player
- **Intuitive Controls**: 
  - Easy mode selection
  - Quick reset button
  - Change mode option
- **Smooth Animations**: Hover effects, transitions, and visual polish

## 📁 Project Structure

```
infinitris/
├── app/
│   └── page.tsx              # Main game page
├── components/
│   ├── game-board.tsx        # Game board grid
│   ├── game-cell.tsx         # Individual cell component
│   ├── game-status.tsx       # Status display (turn, winner)
│   ├── game-controls.tsx     # Game control buttons
│   ├── mode-selector.tsx     # Mode selection screen
│   └── ui/                   # shadcn/ui components
├── hooks/
│   └── use-infinite-tic-tac-toe.ts  # Game state and logic
├── lib/
│   └── game-logic.ts         # Core game mechanics and AI
└── ...
```

## 🧠 Game Strategy Tips

Since moves disappear after placing your 4th move, consider these strategies:

1. **Plan Ahead**: Always think about which move will disappear when you place your next one
2. **Timing is Key**: Sometimes it's better to delay your winning move if it would disappear next turn
3. **Force Mistakes**: Make your opponent's oldest move be in a critical position
4. **Defend Wisely**: Don't waste moves blocking if they'll disappear before your opponent wins
5. **Move Rotation**: Keep track of your move numbers to predict the board state

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with [Next.js](https://nextjs.org), styled with [Tailwind CSS](https://tailwindcss.com), and components from [shadcn/ui](https://ui.shadcn.com).

---

Enjoy playing Infinite Tic-Tac-Toe! 🎮✨
