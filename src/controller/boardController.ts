import { Request, Response } from "express";
import Board from "../models/board.model";

export const createBoard = async (req: Request, res: Response) => {
  const {
    company,
    logo,
    description,
    jobType,
    jobTitle,
    locations,
    spotlightOption,
  } = req.body;
  try {
    const newBoard = new Board({
      company,
      logo,
      description,
      jobType,
      jobTitle,
      locations,
      spotlightOption,
    });
    await newBoard.save();
    res.status(201).json({
      message: "success",
      data: newBoard,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: error,
    });
  }
};

export const getBoards = async (req: Request, res: Response) => {
  try {
    const boards = await Board.find().populate("spotlightOption").exec();
    res.status(200).json({
      message: "success",
      data: boards,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: error,
    });
  }
};

export const getBoardById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const board = await Board.findById(id).populate("spotlightOption").exec();
    res.status(200).json({
      message: "success",
      data: board,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: error,
    });
  }
};

export const updateBoard = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    company,
    logo,
    description,
    jobType,
    jobTitle,
    locations,
    spotlightOption,
  } = req.body;
  try {
    const board = await Board.findByIdAndUpdate(
      id,
      {
        company,
        logo,
        description,
        jobType,
        jobTitle,
        locations,
        spotlightOption,
      },
      { new: true }
    );
    res.status(200).json({
      message: "success",
      data: board,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: error,
    });
  }
};

export const deleteBoard = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const board = await Board.findByIdAndDelete(id);
    res.status(200).json({
      message: "success",
      data: board,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: error,
    });
  }
};
