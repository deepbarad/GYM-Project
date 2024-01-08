export function limitText(message: string, limit: number): string {
  if (message?.length <= limit) {
    return message;
  } else {
    return message?.slice(0, limit) + <br />;
  }
}
export function breakLineAfterNthCharacter(input: any, n: any) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    output += input[i];
    if ((i + 1) % n === 0) {
      output += "\n";
    }
  }
  return output;
}
