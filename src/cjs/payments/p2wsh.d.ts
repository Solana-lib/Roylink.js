/*
 * @Author: Timber.Wang
 * @Date: 2025-03-25 22:32:04
 * @LastEditors: Timber.Wang
 * @LastEditTime: 2025-03-25 22:53:56
 * @Description: 
 */
import { Payment, PaymentOpts } from './index.js';
/**
 * Creates a Pay-to-Witness-Script-Hash (P2WSH) payment object.
 *
 * @param a - The payment object containing the necessary data.
 * @param opts - Optional payment options.
 * @returns The P2WSH payment object.
 * @throws {TypeError} If the required data is missing or invalid.
 */
export declare function p2wsh(a: Payment, opts?: PaymentOpts): Payment;

