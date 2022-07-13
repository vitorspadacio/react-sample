export interface HomeStore {
  number: number;
  increment: () => void;
  decrement: () => void;
  incrementBy: (quantity: number) => void;
  reset: () => void;
}
