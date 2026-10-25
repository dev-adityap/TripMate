import React from 'react';

/**
 * Minimal error boundary so a render-time exception shows a recoverable UI
 * instead of a blank white screen.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unhandled UI error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#09090B] text-white flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-white/[0.04] border border-white/10 p-8 rounded-3xl shadow-2xl text-center space-y-5">
            <h1 className="text-2xl font-black uppercase tracking-tight text-white">Something went wrong</h1>
            <p className="text-xs text-white/60 leading-relaxed">
              An unexpected error occurred while rendering this page. You can reload the view or head back to
              safety.
            </p>
            {this.state.error?.message && (
              <pre className="text-[10px] text-rose-300/80 bg-black/40 border border-white/10 rounded-xl p-3 overflow-auto max-h-32 text-left">
                {this.state.error.message}
              </pre>
            )}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleReset}
                className="bg-white hover:bg-amber-400 text-zinc-950 font-bold px-5 py-3 rounded-xl text-xs transition-all cursor-pointer"
              >
                Try Again
              </button>
              <a
                href="/home"
                className="px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-bold text-xs transition-all"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
