import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

vi.mock('readline-sync', () => ({
  default: { question: vi.fn() },
}));

describe('Cifrado César', () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.resetModules();
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  async function ejecutar(palabra: string, clave: string, accion: string) {
    const rl = await import('readline-sync');
    vi.mocked(rl.default.question)
      .mockReturnValueOnce(palabra)
      .mockReturnValueOnce(clave)
      .mockReturnValueOnce(accion);
    await import('../src/index.ts');
  }

  it('cifra una palabra en minúsculas', async () => {
    await ejecutar('hola', '3', 'cifrar');
    expect(consoleSpy).toHaveBeenCalledWith('krñd');
  });

  it('descifra una palabra cifrada', async () => {
    await ejecutar('krñd', '3', 'descifrar');
    expect(consoleSpy).toHaveBeenCalledWith('hola');
  });

  it('cifra preservando mayúsculas', async () => {
    await ejecutar('HOLA', '3', 'cifrar');
    expect(consoleSpy).toHaveBeenCalledWith('KRÑD');
  });

  it('descifra una palabra cifrada con otra clave', async () => {
    await ejecutar('mtpf', '5', 'descifrar');
    expect(consoleSpy).toHaveBeenCalledWith('hola');
  });
});
