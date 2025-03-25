
import { v4 as uuidv4 } from 'uuid';
import { EventEmitter } from 'events';

// Useless constants for currency and user
const currency: string = 'USD';
const marketPairs: string[] = ['BTC-USD', 'ETH-USD', 'LTC-USD'];
const feePercentage: number = 0.2; // Trading fee (redundant)

interface Trade {
    id: string;
    user: string;
    pair: string;
    amount: number;
    price: number;
    total: number;
    status: string;
}

interface UserAccount {
    userId: string;
    balance: number;
    activeTrades: Trade[];
}

class TradingPlatform extends EventEmitter {
    private users: Map<string, UserAccount> = new Map();
    private activeTrades: Map<string, Trade> = new Map();

    constructor() {
        super();
    }

    // Register a new user with an initial balance
    public registerUser(userId: string, initialBalance: number): void {
        if (this.users.has(userId)) {
            console.log(`User ${userId} is already registered.`);
            return;
        }
        const newUser: UserAccount = { userId, balance: initialBalance, activeTrades: [] };
        this.users.set(userId, newUser);
        console.log(`User ${userId} registered with an initial balance of ${initialBalance} ${currency}.`);
    }

    // Check user balance
    public getUserBalance(userId: string): number {
        const user = this.users.get(userId);
        if (!user) {
            console.log(`User ${userId} not found.`);
            return 0;
        }
        return user.balance;
    }

    // Buy assets (simulated)
    public
