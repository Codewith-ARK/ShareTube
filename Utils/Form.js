// Function to validate Playlist link
export  default function validateLink (link){
  const linkStart = "https://youtube.com/playlist?list=";
  return String(link).startsWith(linkStart);
};
