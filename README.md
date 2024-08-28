# Project-TuneTap ( YouTube Video Downloader )

This project allows users to search for YouTube videos and download them. The backend server handles video information and format options, while the frontend, built with React and Vite, provides a modern interface for interacting with the service.

## Project Overview

### Screenshot

![Screenshot](src/assets/SS/Screenshot%202024-08-27%20192404.png)

### Backend

The backend server is developed using Node.js and Express, utilizing `ytdl-core` to fetch video details from YouTube.

- **Repository**: [MP4-MP3-Download-Server](https://github.com/amliyanage/MP4-MP3-Download-Server-.git)
- **Endpoint**: `/video-options/:videoId`
- **Method**: GET
- **Parameters**:
    - `videoId` - The ID of the YouTube video.

### Frontend

The frontend is developed with React and Vite, offering a fast and responsive user interface for searching and downloading YouTube videos.

- **Repository**: [Video_Downloader](https://github.com/amliyanage/Project-TuneTap.git)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Setup

#### Backend

1. Clone the backend repository:

    ```bash
    git clone https://github.com/amliyanage/MP4-MP3-Download-Server-.git
    cd MP4-MP3-Download-Server-
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

   The server will run on [http://localhost:3001](http://localhost:3001).

#### Frontend

1. Clone the frontend repository:

    ```bash
    git clone https://github.com/amliyanage/Video_Downloader.git
    cd Video_Downloader
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

   The frontend will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the frontend in your browser.
2. Search for a YouTube video by its subject or URL.
3. Select a video from the search results.
4. Choose the desired format from the available options.
5. Click the download button to start the download.

## API Reference

### GET /video-options/:videoId

Fetches available formats and details for a given YouTube video ID.

- **Parameters**:
    - `videoId` (string): The ID of the YouTube video.

- **Response**:
    - `formats` (array): List of available video formats.
    - `bestQuality` (object): Information about the best quality format (e.g., 1440p).

## Editing the Code

### Backend

1. **Add New Features**: Modify the routes and controllers in the `server` directory to add new features or endpoints.
2. **Update Dependencies**: If you need to update or add new dependencies, edit the `package.json` file and run `npm install`.

### Frontend

1. **Modify UI Components**: Update the React components in the `src` directory to change the UI or add new features.
2. **Update API Calls**: Edit the API call logic in the service files if you need to adjust how the frontend communicates with the backend.

### Testing

1. **Backend**: Add or modify unit tests in the `test` directory using your preferred testing framework.
2. **Frontend**: Use testing libraries like Jest or React Testing Library to add or modify tests for your components.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to open issues or submit pull requests if you have any improvements or suggestions. Please make sure to follow the contributing guidelines if you have any.

## Contact

If you have any questions, please reach out to ashenmliyanage@gmail.com.
