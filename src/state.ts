type Move = "piedra" | "papel" | "tijera";
type Game = {
  computerPlay: Move;
  myPlay: Move;
  history: {
    win: number;
    lost: number;
    tie: number;
  };
};

const state = {
  data: {
    game: {
      computerPlay: "",
      myPlay: "",
    },
    history: {
      win: 0,
      lost: 0,
      tie: 0,
    },
  },

  listeners: [],
  init() {
    this.setState(this.data);
  },
  getState() {
    return this.data;
  },
  setState(newState) {
    this.game = newState.game;
    for (const cb of this.listeners) {
      cb(newState);
    }
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  whoWins(myPlay: Move, computerPlay: Move) {
    const currentState = this.getState();
    const win =
      (myPlay == "tijera" && computerPlay == "papel") ||
      (myPlay == "piedra" && computerPlay == "tijera") ||
      (myPlay == "papel" && computerPlay == "piedra");
    const lost =
      (myPlay == "tijera" && computerPlay == "piedra") ||
      (myPlay == "piedra" && computerPlay == "papel") ||
      (myPlay == "papel" && computerPlay == "tijera");
    const tie = myPlay == computerPlay;

    if (win) {
      currentState.history.win++;
    } else if (lost) {
      currentState.history.lost++;
    } else {
      currentState.history.tie++;
    }
    this.setState(currentState);

    return tie ? "tie" : win ? "win" : "lost";
  },
  computerPlay() {
    const move: Move[] = ["piedra", "papel", "tijera"];
    const randomMove = move[Math.floor(Math.random() * move.length)];
    return randomMove;
  },
};

export { state, Game, Move };
