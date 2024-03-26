export class PostModel {


  constructor(
    public id?: string,
    public post?: string,
    public bgColor?: string,
    public privacy?: string,
    public feelings?: string,
    public gifUrl?: string,
    public profilePicture?: string,
    public imgVersion?: string,
    public imgId?: string,
    public image?: string,
    public video?: string,
    public videoVersion?: string,
    public videoId?: string
  ) {}
}
