class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    // this.baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    this.baseURL = "https://project-1-api.herokuapp.com";
  }
  async postComment(comment) {
    try {
      const response = await axios.post(
        `${this.baseURL}/comments?api_key=${this.apiKey}`,
        comment
      );
      console.log("Comment successfully posted");
      return response.data;
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  }
  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseURL}/comments?api_key=${this.apiKey}`
      );
      if (!response.data || !Array.isArray(response.data)) {
        return [];
      }

      return response.data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
    } catch (error) {
      console.error("Error fetching comments:", error);
      return [];
    }
  }
  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseURL}/showdates/?api_key=${this.apiKey}`
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching shows date:", error);
      return [];
    }
  }
}
