/*
 * @Author: Timber.Wang
 * @Date: 2025-03-25 22:32:04
 * @LastEditors: Timber.Wang
 * @LastEditTime: 2025-03-25 22:53:42
 * @Description: 
 */
import { Payment, PaymentOpts } from './index.js';
/**
 * Creates a Pay-to-Script-Hash (P2SH) payment object.
 *
 * @param a - The payment object containing the necessary data.
 * @param opts - Optional payment options.
 * @returns The P2SH payment object.
 * @throws {TypeError} If the required data is not provided or if the data is invalid.
 */
export declare function p2sh(a: Payment, opts?: PaymentOpts): Payment;

var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };

  
