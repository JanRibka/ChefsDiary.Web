import React, { Component, ErrorInfo, ReactNode } from "react";

import { Button } from "@radix-ui/themes";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

/**
 * Zobrazí chybu na stránce, pokud dojde k chybě uvnitř ErrorBoundary komponentě
 * @returns Název a popis chyby
 */

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,

    error: new Error(),

    errorInfo: { componentStack: "" },
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);

    this.setState({
      error: error,

      errorInfo: errorInfo,
    });
  }

  reloadComponent = () => {
    this.setState({
      hasError: false,
    });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <h2>Něco se pokazilo.</h2>

          <p>
            <strong>Název chyby: </strong>
            {this.state.error ? this.state.error.name : ""}
          </p>

          <p>
            <strong>Popis chyby: </strong>
            {this.state.error ? this.state.error.message : ""}
          </p>

          <Button variant="surface" onClick={this.reloadComponent}>
            Přenačíst
          </Button>
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
