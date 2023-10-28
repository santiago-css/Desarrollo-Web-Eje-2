import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

import * as videoService from "./Services/VideoService";
import { Video } from "./Interfaces/VideoInterface";

import "./VideoItem.css";

interface Props {
    video: Video;
    loadVideos: () => void;
}

const VideoItem = (props: Props) => {
    const { video, loadVideos } = props;

    const history = useNavigate();

    const handleDelete = async (id: string) => {
        await videoService.deleteVideoById(id);
        loadVideos();
    };

    return (
        <div className="col-md-4 p-2">
            <div
                className="card card-body video-card animate__animated animate__backInUp"
                style={{ cursor: "pointer" }}
                onClick={() => history(`/update/${video._id}`)}
            >
                <div className="d-flex justify-content-between">
                    <h5>{video.title}</h5>
                </div>
                <p>{video.description}</p>
                <div className="embed-responsive embed-responsive-16by9">
                    <ReactPlayer url={video.url} />
                </div>
            </div>
            <button
                className="btn btn-primary btn-block mt-2"
                onClick={() => history(`/update/${video._id}`)}
            >
                Update
            </button>
            <button
                className="btn btn-danger btn-block mt-2"
                onClick={() => video._id && handleDelete(video._id)}
            >
                Delete
            </button>
        </div>
    );
};

export default VideoItem;
