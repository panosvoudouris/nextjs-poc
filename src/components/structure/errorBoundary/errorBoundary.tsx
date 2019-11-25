import React from 'react';

interface IProps {
  children: any;
}

interface IState {
  hasError: boolean;
  error: any;
  errorInfo: any;
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
    console.log(errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Oops! Something went wrong.</h1>
          {this.state.error && <div>{this.state.error}</div>}
          {this.state.errorInfo && <div>{this.state.errorInfo}</div>}
        </>
      );
    }

    return this.props.children;
  }
}
