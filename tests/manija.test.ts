import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

vi.mock('readline-sync', () => ({
  default: { question: vi.fn() },
}));

describe('Tarjetas de crédito', () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.resetModules();
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  async function ejecutar(tarjeta: string): Promise<void> {
    const rl = await import('readline-sync');
    vi.mocked(rl.default.question).mockReturnValueOnce(tarjeta);
    await import('../src/manija.ts');
  }

  it('identifica AMEX con prefijo 34', async () => {
    await ejecutar('3411111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('AMEX');
  });

  it('identifica AMEX con prefijo 37', async () => {
    await ejecutar('3711111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('AMEX');
  });

  it('identifica VISA', async () => {
    await ejecutar('4111111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('VISA');
  });

  it('identifica MASTERCARD con prefijo 51', async () => {
    await ejecutar('5111111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('MASTERCARD');
  });

  it('identifica MASTERCARD con prefijo 52', async () => {
    await ejecutar('5211111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('MASTERCARD');
  });

  it('identifica MASTERCARD con prefijo 53', async () => {
    await ejecutar('5311111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('MASTERCARD');
  });

  it('identifica MASTERCARD con prefijo 54', async () => {
    await ejecutar('5411111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('MASTERCARD');
  });

  it('identifica MASTERCARD con prefijo 55', async () => {
    await ejecutar('5511111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('MASTERCARD');
  });

  it('no confunde 33 con AMEX', async () => {
    await ejecutar('3311111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('Desconocida');
  });

  it('no confunde 35 con AMEX', async () => {
    await ejecutar('3511111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('Desconocida');
  });

  it('no confunde 36 con AMEX', async () => {
    await ejecutar('3611111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('Desconocida');
  });

  it('no confunde 38 con AMEX', async () => {
    await ejecutar('3811111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('Desconocida');
  });

  it('no confunde 50 con MASTERCARD', async () => {
    await ejecutar('5011111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('Desconocida');
  });

  it('no confunde 56 con MASTERCARD', async () => {
    await ejecutar('5611111111111111');
    expect(consoleSpy).toHaveBeenCalledWith('Desconocida');
  });
});
