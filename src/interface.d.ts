interface IPlaylist {
  id: string, 
  name: string, 
  description: string
}

interface IPlaylistForm {
  name: string
  description: string
  public?: boolean
}