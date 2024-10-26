import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import CreateProduct from "./CreateProduct";

describe("CreateProduct Component", () => {
  const mockOnAddProduct = jest.fn();

  beforeEach(() => {
    render(<CreateProduct onAddProduct={mockOnAddProduct} />);
  });

  test("should not allow Product Name to be empty", () => {
    const submitButton = screen.getByText(/add product/i);
    fireEvent.click(submitButton);
    expect(screen.getByText(/product name is required/i)).toBeInTheDocument();
  });

  test("should not allow Product Name to contain special characters (@, #, {, })", () => {
    const productNameInput = screen.getByPlaceholderText(/product name/i);
    fireEvent.change(productNameInput, { target: { value: "Invalid@Name" } });
    const submitButton = screen.getByText(/add product/i);
    fireEvent.click(submitButton);
    expect(screen.getByText(/product name cannot contain special characters/i)).toBeInTheDocument();
  });

  test("should not allow Product Name to exceed 25 characters", () => {
    const productNameInput = screen.getByPlaceholderText(/product name/i);
    fireEvent.change(productNameInput, { target: { value: "This Product Name Is Way Too Long" } });
    const submitButton = screen.getByText(/add product/i);
    fireEvent.click(submitButton);
    expect(screen.getByText(/product name cannot exceed 25 characters/i)).toBeInTheDocument();
  });

  test("should not allow any form field to be empty", () => {
    const submitButton = screen.getByText(/add product/i);
    fireEvent.click(submitButton);

    expect(screen.getByText(/product name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a valid product category/i)).toBeInTheDocument();
    expect(screen.getByText(/please select product freshness/i)).toBeInTheDocument();
    expect(screen.getByText(/product price must be a positive number/i)).toBeInTheDocument();
  });
});
