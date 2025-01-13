import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, GitBranch, Search, Terminal } from 'lucide-react';

const MCPPortfolioEntry = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Building an AI-Powered Code Analysis Tool</h1>
          <p className="text-xl text-gray-600">From Concept to Production in Hours</p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="technical" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Technical
            </TabsTrigger>
            <TabsTrigger value="architecture" className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              Architecture
            </TabsTrigger>
            <TabsTrigger value="results" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Results
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  Developed a sophisticated code analysis system using Anthropic's Model Context 
                  Protocol (MCP) in under 6 hours, demonstrating rapid prototyping and deep 
                  technical integration capabilities.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Key Challenges</h3>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Integrating multiple data sources through MCP</li>
                      <li>Building real-time code analysis capabilities</li>
                      <li>Ensuring production-ready code quality</li>
                      <li>Creating an extensible architecture</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Technologies Used</h3>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>TypeScript/JavaScript</li>
                      <li>MCP Protocol</li>
                      <li>React</li>
                      <li>Node.js</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Technical Tab */}
          <TabsContent value="technical">
            <Card>
              <CardHeader>
                <CardTitle>Technical Implementation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Core Components</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white rounded shadow">
                      <h4 className="font-medium mb-2">Code Analysis Engine</h4>
                      <ul className="text-sm space-y-1">
                        <li>Deep code parsing</li>
                        <li>Context-aware suggestions</li>
                        <li>Real-time analysis</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                      <h4 className="font-medium mb-2">Data Integration</h4>
                      <ul className="text-sm space-y-1">
                        <li>Web search integration</li>
                        <li>GitHub repository access</li>
                        <li>File system operations</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                      <h4 className="font-medium mb-2">Protocol Layer</h4>
                      <ul className="text-sm space-y-1">
                        <li>MCP standardization</li>
                        <li>Tool validation</li>
                        <li>Async execution</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg text-white">
                  <h3 className="font-semibold text-lg mb-4">Implementation Example</h3>
                  <pre className="text-sm overflow-x-auto">
                    {`class MCPToolManager {
  private tools: Map<string, Tool>;

  registerTool(tool: Tool): void {
    this.validateTool(tool);
    this.tools.set(tool.name, tool);
  }

  async executeTool(name: string, params: any): Promise<any> {
    const tool = this.tools.get(name);
    if (!tool) throw new Error(\`Tool \${name} not found\`);
    return await tool.handler(params);
  }
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Architecture Tab */}
          <TabsContent value="architecture">
            <Card>
              <CardHeader>
                <CardTitle>System Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-6 rounded-lg">
                  <img 
                    src="/api/placeholder/800/400" 
                    alt="MCP Architecture Diagram"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Design Principles</h3>
                      <ul className="space-y-2">
                        <li>Modular component structure</li>
                        <li>Clear separation of concerns</li>
                        <li>Future-proof extensibility</li>
                        <li>Robust error handling</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Integration Points</h3>
                      <ul className="space-y-2">
                        <li>MCP Protocol interface</li>
                        <li>External API connections</li>
                        <li>Data source handlers</li>
                        <li>Analysis pipeline</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results">
            <Card>
              <CardHeader>
                <CardTitle>Results & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Performance Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded">
                        <p className="text-3xl font-bold text-blue-600">6</p>
                        <p className="text-sm text-gray-600">Hours to Complete</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded">
                        <p className="text-3xl font-bold text-green-600">100%</p>
                        <p className="text-sm text-gray-600">Test Coverage</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded">
                        <p className="text-3xl font-bold text-purple-600">3</p>
                        <p className="text-sm text-gray-600">Major Components</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded">
                        <p className="text-3xl font-bold text-orange-600">5</p>
                        <p className="text-sm text-gray-600">Integrated Tools</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Key Achievements</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <p>Rapid adoption of MCP protocol with clean implementation</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <p>Production-ready code with comprehensive testing</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                        <p>Extensible architecture for future enhancements</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <p>Seamless integration with existing systems</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MCPPortfolioEntry;