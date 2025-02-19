class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }
  async postComment(comment) {
    try {
      const response = await axios.post(`${this.baseURL}/comments`, comment, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
      });
      console.log("Comment successfully posted");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  }
  async getComments() {
    try {
      const response = await axios.get(`${this.baseURL}/comments`, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      });
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
}
